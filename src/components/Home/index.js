import React from 'react';
import PropTypes from 'prop-types';

/**
 * @author Pranav Singhal <pranavsinghal96@gmail.com>
 * @author [Pranav Singhal](https://github.com/pranav-singhal)
 * @createdOn  29-2020-05, Fri, 16:58
 */
Home.propTypes = {

};

function Home(props) {
    return (
        <div>
            <button onClick={e => console.log(e, "I was clicked")}>

            </button>
            Hello {props.name} !!!
        </div>
    );
}

export default Home;
