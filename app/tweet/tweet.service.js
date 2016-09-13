"use strict";
var tweet_model_1 = require('./tweet.model');
var TweetService = (function () {
    function TweetService() {
        this.tweets = [new tweet_model_1.TweetModel('AA', '@aa', 'To use these features in an application, just build it as a Spring Boot application that depends on spring-cloud-config-client (e.g. see the test cases for the config-client, or the sample app). The most convenient way to add the dependency is via a Spring Boot starter org.springframework.cloud:spring-cloud-starter-config. There is also a parent pom and BOM (spring-cloud-starter-parent) for Maven users and a Spring IO version management properties file for Gradle and Spring CLI users. Example Maven configuration:', 3),
            new tweet_model_1.TweetModel('BB', '@bb', 'Where do you want to store the configuration data for the Config Server? The strategy that governs this behaviour is the EnvironmentRepository, serving Environment objects. This Environment is a shallow copy of the domain from the Spring Environment (including propertySources as the main feature). The Environment resources are parametrized by three variables:', 4),
            new tweet_model_1.TweetModel('CC', '@cc', 'The default implementation of EnvironmentRepository uses a Git backend, which is very convenient for managing upgrades and physical environments, and also for auditing changes. To change the location of the repository you can set the "spring.cloud.config.server.git.uri" configuration property in the Config Server (e.g. in application.yml). If you set it with a file: prefix it should work from a local repository so you can get started quickly and easily without a server, but in that case the server operates directly on the local repository without cloning it (it doesn’t matter if it’s not bare because the Config Server never makes changes to the "remote" repository). To scale the Config Server up and make it highly available, you would need to have all instances of the server pointing to the same repository, so only a shared file system would work. Even in that case it is better to use the ssh: protocol for a shared filesystem repository, so that the server can clone it and use a local working copy as a cache.', 5)];
    }
    TweetService.prototype.getTweets = function () {
        return this.tweets;
    };
    return TweetService;
}());
exports.TweetService = TweetService;
//# sourceMappingURL=tweet.service.js.map