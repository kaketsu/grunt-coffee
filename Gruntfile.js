module.exports = function(grunt){

	grunt.initConfig({
		pkg:grunt.file.readJSON('package.json'),
		uglify:{
			options:{
				
			},
			build:{
				src: 'src/*.js',
        		dest: 'build/<%= pkg.name %>.min.js'
			}
		},
		watch:{
				
		}

	})

	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-jshint');

	grunt.registerTask('default',['uglify']);
;}