import React from 'react';
import { useSelector } from 'react-redux';
import './quote.css';
import Generate from './Generate';
import $ from 'jquery';

function Quote() {
    const generate = useSelector((state) => state.generate.value)
    
    $(".text-color").animate({ opacity: 0 }, 250, function () {
        $(".text-color").css("color", generate.color);
        $(".text-color").animate({ opacity: 1 }, 250);
    });
    $("#wrapper").animate({ opacity: 0 }, 250, function () {
        $("#wrapper").css("background-color", generate.color);
        $("#wrapper").animate({ opacity: 1 }, 250);
    });
    

    return (
        <div id="wrapper">
            <div class="center-screen" id="quote-box">
                <h1 id="text" class="text-color"><i class="fa fa-quote-left text-color"></i> { generate.text }</h1>
                <h3 id="author" class="text-color">- { generate.author }</h3>
            <Generate />
            </div>
        </div>
    )
}

export default Quote;