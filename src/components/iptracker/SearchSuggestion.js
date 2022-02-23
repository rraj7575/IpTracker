import Suggestion from 'search-suggestion';
import {Fragment} from "react";

function SearchSuggestion({suggestions, onChangeIpAddress, getLocation, inputVal}) {
    return(
        <Suggestion
            items={suggestions}
            // onSelectedItem={service => {
            //     const { slug } = service || {};
            //     const { history } = this.props;
            //     if (slug) {
            //         history.push({
            //             pathname: slug
            //         });
            //     }
            // }}
        >
            {({
                  getInputProps,
                  getListItemProps,
                  getItemProps,
                  selectedItem,
                  highlightedIndex,
                  items: suggestions,
                  isOpen,
              }) => (
                <div className="input-group">
                    <span className="search-icon"><i className="fa fa-search" aria-hidden="true" /></span>
                    <input className="form-control input-lg"
                           // value={inputVal}
                           autoComplete="off"
                           {...getInputProps({
                               placeholder: 'Please Enter Ip Address',
                               onChange: onChangeIpAddress,
                               value: inputVal
                           })}
                    />
                    <div className="input-group-btn">
                        <button className="btn btn-header-search" onClick={() => getLocation()}>
                            Search
                        </button>
                    </div>
                    <br/>
                    {isOpen && (
                        <ul {...getListItemProps()} className="list-group search-product">
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
                    )}
                </div>
            )}
        </Suggestion>
    )
}

export default SearchSuggestion