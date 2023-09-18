import React, {Component} from "react";
import './search-input.css'


class SearchInput extends Component{
    render(){
        const {placeText}=this.props;
        return(
            <input
                className="form-control search-input"
                type="text" placeholder={placeText}
            />
        )
    }
}

const SearchInputFunc = ({placeText})=>{
    return(
        <input
            className="form-control search-input"
            type="text" placeholder={placeText}
        />
    )
}

export default SearchInput