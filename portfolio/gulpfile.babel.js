/**
 * Created by justin on 10/23/16.
 */
import path from 'path';

import gulp from 'gulp';


// Load all gulp plugins automatically
// and attach them to the `plugins` object
import plugins from 'gulp-load-plugins';
import sass from 'gulp-sass';



gulp.task('default', [
	'scripts',
	'styles:bootstrap'
]);

gulp.task('scripts', [
	'scripts:jquery',
	'scripts:bootstrap',
	'scripts:tether'
]);

gulp.task('scripts:jquery', () =>
	// place code for your default task here
	gulp.src('node_modules/jquery/dist/jquery*(.min)+(.map|.js)')
		.pipe(gulp.dest('static/js'))
  		// .pipe(notify('Copied <%= file.relative %>!'));
);

gulp.task('scripts:bootstrap', () =>
	// place code for your default task here
	gulp.src('node_modules/bootstrap/dist/js/bootstrap*(.min)+(.map|.js)')
		.pipe(gulp.dest('static/js'))
  		// .pipe(notify('Copied <%= file.relative %>!'));
);

gulp.task('scripts:tether', () =>
	// place code for your default task here
	gulp.src('node_modules/tether/dist/js/tether*(.min).js')
		.pipe(gulp.dest('static/js'))
  		// .pipe(notify('Copied <%= file.relative %>!'));
);

gulp.task('styles:bootstrap', () =>
	gulp.src('node_modules/bootstrap/dist/css/bootstrap-flex*(.min).css*(.map)')
		.pipe(gulp.dest('static/css'))
		//.pipe(plugins().notify('Bootstrap CSS copied successfully!'))
);

gulp.task('styles:main', () =>
	gulp.src('./scss/main.scss')
		.pipe(sass().on('error', sass.logError))
		.pipe(gulp.dest('./static/css'))
		.pipe(plugins().notify('SASS compiled successfully!'))
);