import Suggestion from 'search-suggestion';
import {Fragment} from "react";

function SearchSuggestion({suggestions, onChangeIpAddress, getLocation, inputVal}) {
    return(
        <Suggestion
            items={suggestions}>
            {({
                  getListItemProps,
                  selectedItem,
                  highlightedIndex,
                  items: suggestions,

              }) => (
                <div className="input-group">
                    <br/>
                    <ul {...getListItemProps()} className="list-group search-product"
                        style={{zIndex: '10'}}
                    >
                        {suggestions.map((ipAddress, index) => {
                            return (
                                <Fragment key={ipAddress}>
                                    <li className="list-group-item"
                                        style={{
                                            backgroundColor:
                                                highlightedIndex === index
                                                    ? 'rgb(232, 232, 232)'
                                                    : 'white',
                                            fontWeight:
                                                selectedItem && selectedItem === ipAddress
                                                    ? 'bold'
                                                    : 'normal'
                                        }}
                                        onClick={() => {
                                            getLocation(ipAddress)}}
                                    >
                                        {ipAddress}
                                    </li>
                                </Fragment>
                            );
                        })}
                    </ul>
                </div>
            )}
        </Suggestion>
    )
}

export default SearchSuggestion