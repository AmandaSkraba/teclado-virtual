import React from "react";
import _ from 'lodash';
import styles from './key.module.css'
import { NOTE_TO_KEY } from "@/global/constants";

interface KeyProps {
    note: string;
    pressedKeys: any;
}

class Key extends React.Component<KeyProps> {
    noteIsFlat = (nt: string) => {
        return nt.length > 1;
    }
    keyIsPressed = (nt: any, pressedKeys: any) => {
        return _.includes(pressedKeys, NOTE_TO_KEY[nt]);
    };


    render() {

        let keyClassName = styles.key;
        const noteIsFlat = this.noteIsFlat(this.props.note);
        const keyIsPressed = this.keyIsPressed(this.props.note, this.props.pressedKeys); //TODO não estava assim no tutorial

        if (noteIsFlat) {
            keyClassName += ' ' + styles.flat;
        }
        if (keyIsPressed) {
            keyClassName += ' ' + styles.pressed;
        }
        let key;

        if (noteIsFlat) {
            key = <div className={keyClassName}></div>;

        } else {
            key = (
                <div className={keyClassName}>
                    <h1 className="key-text">
                        {this.props.note.toUpperCase()}
                    </h1>
                </div>
            );
        }
        return key;
    }
};

export { Key }