module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    jshint: {
      files: ['Gruntfile.js', 'helloworld.js']
    },
    qunit: {
      files: ['test/index.html']
    },
    uglify: {
      options: {
        banner: '\/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> *\/\n'
      },
      build: {
        src: 'helloworld.js',
        dest: 'helloworld.min.js'
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-qunit');
  grunt.loadNpmTasks('grunt-contrib-uglify');

  grunt.registerTask('default', ['jshint', 'uglify', 'qunit']);
  grunt.registerTask('test', ['jshint', 'qunit']);
};
