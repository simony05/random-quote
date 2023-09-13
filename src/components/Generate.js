import React from 'react';
import { useDispatch } from 'react-redux';
import { newQuote } from "../features/generate";
import './generate.css';
import $ from 'jquery';

function Generate(props) {
    const dispatch = useDispatch()

    $(".background-color").animate({ opacity: 0 }, 250, function () {
        $(".background-color").css("background-color", props.color);
        $(".background-color").animate({ opacity: 1 }, 250);
    });
 
    return (
        <div class="container-fluid" id="buttons">
            <div>
                <div class="row" id="left-buttons">
                    <div class="col-md-2">
                        <a id="tweet-quote" class="btn btn-default background-color" href="https://twitter.com/intent/tweet"><i class="fa-brands fa-x-twitter"></i></a>
                    </div>
                    <div class="col-md-2">
                        <button id="tumblr" class="btn btn-default background-color"><i class="fa-brands fa-instagram"></i></button>
                    </div>
                </div>
                <div>
                    <button type="button" class="btn btn-default background-color" id="new-quote"
                    onClick={() => {dispatch(newQuote())}}>New</button>
                </div>
            </div>
        </div>
    )
}

export default Generate;