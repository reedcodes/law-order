'use strict';

const gulp = require( 'gulp' ),
      sass = require( 'gulp-sass' )( require( 'sass' ) );

// Define CSS source and distribution directories.
const cssSource = './source/_sass/**/*.scss';
const cssBuild = './site/dist/css';

// Task to compile CSS files.
gulp.task( 'sass', function() {
  return gulp.src( cssSource )
    .pipe( sass( {
      outputStyle: 'compressed'
    } ) )
    .pipe( gulp.dest( cssBuild ) );
});

// Gulp tasks.
gulp.task( 'default', gulp.series( 'sass' ) );
