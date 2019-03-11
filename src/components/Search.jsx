import React from 'react';

const Search = ({onChange, value}) => {
     return (
            <form>
                <div className="form-group">
                    <label className="col-form-label">Search</label>
                    <input type="text" className="form-control"
                           onChange={onChange}
                           value={value}/>
                </div>
            </form>
        )
}

export default Search;