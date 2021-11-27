import React from "react";
import axios from "axios";
import { Component } from "react";
import "./Map.scss";
class Map extends Component {
    state = {
        map:{}
    }
    componentDidMount() {
        console.log("mounted")
        this.getMap();
        this.getLocation();
    }
    getMap = () => {
        axios
        .get(
            "https://native-land.ca/api/index.php?maps=territories&name=tsimshian,kwakwakawakw,tlingit,haida"
        )
        .then((response) => {
            console.log(response);
            this.setState({
            map: response.data
            })
            
        }).catch((error) => console.log (error));
    }
    getLocation = () => {
        navigator.geolocation.getCurrentPosition((success) => {
            console.log(success); 
            const {lat, long} = success.coords
            axios
            .get(
                `https://native-land.ca/api/index.php?maps=languages&position=${lat},${long}` 
            )
            .then((response) => {
                console.log(response);
            })
        })
       
    }


    render() {
        return (
            <article className="map">
<iframe className="map__iframe" src="https://native-land.ca/api/embed/embed.html?maps=territories&name=tsimshian,kwakwakawakw,tlingit,haida"></iframe>


            </article>
        )
    }
}
export default Map;