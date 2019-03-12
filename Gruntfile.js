
module.exports = function (grunt) {
  grunt.initConfig({
    uglify: {
      release:{
        files: {
                    'dest/rectangle.min.js': ['./rectangle.js'],
            'dist/calc.js':['./calc.js']
            
        }
                     
      }       
                  
    }
              
  });

    grunt.loadNpmTasks('grunt-contrib-uglify');

      grunt.registerTask('default', ['uglify:release']);

};
