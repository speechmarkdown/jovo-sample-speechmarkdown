'use strict';

// ------------------------------------------------------------------
// APP INITIALIZATION
// ------------------------------------------------------------------

const { App } = require('jovo-framework');
const { Alexa } = require('jovo-platform-alexa');
const { GoogleAssistant } = require('jovo-platform-googleassistant');
const { JovoDebugger } = require('jovo-plugin-debugger');
const { FileDb } = require('jovo-db-filedb');
const { SpeechMarkdown } = require('jovo-plugin-speechmarkdown');

const app = new App();

app.use(
    new Alexa(),
    new GoogleAssistant(),
    new JovoDebugger(),
    new FileDb(),
    new SpeechMarkdown()
);


// ------------------------------------------------------------------
// APP LOGIC
// ------------------------------------------------------------------

app.setHandler({
    LAUNCH() {
        return this.toIntent('HelloWorldIntent');
    },

    HelloWorldIntent() {
        this.ask('(Hello World)[interjection] [1s] What\'s your name?', 'Please [500ms] tell me your name.');
    },

    MyNameIsIntent() {
        this.tell(`#[voice:'Brian'] Hey ${this.$inputs.name.value}, nice to meet you!`);
    },
});

module.exports.app = app;
