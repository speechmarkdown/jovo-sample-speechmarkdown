// ------------------------------------------------------------------
// JOVO PROJECT CONFIGURATION
// ------------------------------------------------------------------

module.exports = {
    alexaSkill: {
       nlu: 'alexa',
       manifest: {
         publishingInformation: {
           locales: {
             'en-US': {
               name: 'Speech Markdown App',
               examplePhrases: ['Alexa, open Speech Markdown App'],
             },
            }
         }
      }
    },
    googleAction: {
       nlu: 'dialogflow',
    },
    endpoint: '${JOVO_WEBHOOK_URL}',
};
