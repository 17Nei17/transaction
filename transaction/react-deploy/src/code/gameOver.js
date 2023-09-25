import React, { useState, useEffect } from "react";

export default function GameOver(props) {

    return (
        <React.Fragment>
            <div className="battle-field">
                {props.text}
            </div>
        </React.Fragment>
    );
}
