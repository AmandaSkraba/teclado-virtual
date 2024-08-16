import React from "react";
import { Key } from "./Key";
import styles from './piano.module.css'
import { KEY_TO_NOTE, NOTES, VALID_KEYS } from "@/global/constants";
import _ from "lodash";

interface PianoState {
    pressedKeys: string[]
}
class Piano extends React.Component<{}, PianoState> {
    constructor(props: any) {
        super(props);
        this.state = {
            pressedKeys: [],
        };
    }

    playNote = (note: string) => {
        const noteElement = document.getElementById(note) as HTMLAudioElement;

        if (!_.isEmpty(note)) {
            const noteAudio = new Audio(noteElement.src);
            noteAudio.play();
        }
    }

    handleKeyDown = (event: any) => {
        if (event.repeat) {
            return;
        }
        const key = event.key;
        const updatePressedKey = [...this.state.pressedKeys];
        if (!updatePressedKey.includes(key) && VALID_KEYS.includes(key)) {
            updatePressedKey.push(key);
        }
        this.setState({
            pressedKeys: updatePressedKey,
        });
        this.playNote(KEY_TO_NOTE[key])
    }

    handleKeyUp = (event: any) => {
        const index = this.state.pressedKeys.indexOf(event.key);
        if (index > 1) {
            this.setState(state => ({
                pressedKeys: state.pressedKeys.splice(index, 1),
            }));
        }
    }

    componentDidMount = () => {
        window.addEventListener('keydown', this.handleKeyDown);
        window.addEventListener('keyup', this.handleKeyUp);
    }

    render() {
        const keys = _.map(NOTES, (note, index) => {
            return (
                <Key
                    key={index}
                    note={note}
                    pressedKeys={this.state.pressedKeys}
                />
            );
        });

        const audioFiles = _.map(NOTES, (note, index) => {
            return (
                <audio
                    id={note}
                    key={index}
                    src={`../../notes/${note}.mp3`}
                />
            );
        });


        return (
            <div>
                <div className={styles.piano}>
                    {keys}
                </div>
                <div>
                    {audioFiles}
                </div>
            </div>
        );
    }
}

export { Piano };