module.exports = function(grunt){
    require('load-grunt-tasks')(grunt);
    var path = require('path');

    var pkg = grunt.file.readJSON('package.json');

    var modules = function(){
        var result = [];
        var files = grunt.file.expand('src/**/module.js');

        for(var i = 0; i < files.length; i++) {
            var modulePath = path.dirname(files[i]);
            var name = path.basename(modulePath);
            result.push({
                name: name,
                path: modulePath,
                version: pkg.version
            });
        }
        return result;
    };

    var bundle = function(){
        var result = {
            options: {
                stripBanners: false
            }
        };
        var mods = modules();

        for(var i = 0; i < mods.length; i++){
            result[mods[i].name] = {
                src: [mods[i].path + '/module.js', mods[i].path + '/**/*.js'],
                dest: 'dist/build/' + mods[i].name + '-' + mods[i].version + '.debug.js'
            };
        }

        return result;
    };

    var uglify = function(){
        var result = {};
        var mods = modules();

        for(var i = 0; i < mods.length; i++){
            result['dist/build/' + mods[i].name + '-' + mods[i].version + '.min.js'] =
                   ['dist/build/' + mods[i].name + '-' + mods[i].version + '.debug.js'];
        }

        return result;
    };

    grunt.initConfig({
        pkg: pkg,
        clean: ['dist/build'],
        buildcontrol: {
            pages: {
                options: {
                    dir: 'dist/pages',
                    commit: true,
                    push: true,
                    remote: 'git@github.com:TheEvilDev/angular-squared.git',
                    branch: 'gh-pages',
                    message: 'Built %sourceName% from commit %sourceCommit% on branch %sourceBranch%'
                }
            },
            wiki: {
                options: {
                    dir: 'dist/wiki',
                    commit: true,
                    push: true,
                    remote: 'git@github.com:TheEvilDev/angular-squared.wiki.git',
                    branch: 'master',
                    message: 'Built %sourceName% from commit %sourceCommit% on branch %sourceBranch%'
                }
            },
            source: {
                options: {
                    commit: true,
                    push: true,
                    remote: 'git@github.com:TheEvilDev/angular-squared.git'
                }
            }
        },
        jshint: {
            files: ['gruntfile.js','src/**/*.js','tests/**/*.js']
        },
        watch: {
            scripts: {
                files: '<%= jshint.files %>',
                tasks: ['default']
            }
        },
        ngdocs: {
            options: {
                dest: 'dist/pages/',
                scripts: ['angular.js'],
                html5Mode: false
            },
            all: ['dist/build/angular-squared-0.1.0.debug.js']
        },
        ngAnnotate: {
            options: {
                singleQuotes: true,
            },
            default: {
                files: [{
                    expand: true,
                    src: ['src/**/*.js'],
                }]
            }
        },
        concat: bundle(),
        uglify: {
            dist: {
                options: {
                    sourceMap: true
                },
                files: uglify()
            }
        },
        karma: {
            unit: {
                configFile: 'karma.conf.js'
            }
        }
    });

    grunt.registerTask('lint', ['jshint']);
    grunt.registerTask('doc', ['ngdocs']);
    grunt.registerTask('compile',['ngAnnotate','concat','uglify']);
    grunt.registerTask('test', ['compile','karma']);
    grunt.registerTask('default', ['clean','lint','compile','doc','test']);
    grunt.registerTask('deploy:pages', ['default','buildcontrol:pages']);
    grunt.registerTask('deploy:wiki', ['default','buildcontrol:wiki']);
    grunt.registerTask('deploy:source',['default','buildcontrol:source']);
};
