var Vue = require('vue');
var VueResource = require('vue-resource');

Vue.use(VueResource);

Vue.config.debug = true;

new Vue({
    el: '#container',
    data: {
        fullRepoName: '',
        username: '',
        repo: ''
    },
    methods: {
        changeRepo: function() {
            var splitData = this.fullRepoName.split('/');
            this.username = splitData[0];
            this.repo = splitData[1];

            console.group('Vue data');
            console.log('fullRepoName:',this.fullRepoName);
            console.log('username:',this.username);
            console.log('repo',this.repo);
            console.groupEnd('Vue data');
        }
    },
    components: {
        githubFileExplorer: require('./components/github-file-explorer')
    }
})