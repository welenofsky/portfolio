import path from 'path';
import gulp from 'gulp';
import sass from 'gulp-sass';
import runSequence from 'run-sequence';
import uglify from 'gulp-uglify';
import notify from 'gulp-notify';
import rename from 'gulp-rename';
import concat from 'gulp-concat';
import cleanCSS from 'gulp-clean-css';


gulp.task('default', [
	'scripts',
	'styles:main'
]);

gulp.task('scripts', (callback) =>
	runSequence(
		['scripts:main', 'styles:main'],
		['scripts:uglify', 'styles:minify'],
		callback
	)
	
);

gulp.task('scripts:main', () =>
	gulp.src([
		'node_modules/jquery/dist/jquery.js',
		'node_modules/tether/dist/js/tether.js',
		'node_modules/bootstrap/js/dist/util.js',
		'node_modules/bootstrap/js/dist/alert.js',
		'node_modules/bootstrap/js/dist/button.js',
		'node_modules/bootstrap/js/dist/carousel.js',
		'node_modules/bootstrap/js/dist/collapse.js',
		'node_modules/bootstrap/js/dist/dropdown.js',
		'node_modules/bootstrap/js/dist/modal.js',
		'node_modules/bootstrap/js/dist/tooltip.js',
		'node_modules/bootstrap/js/dist/popover.js',
		'node_modules/bootstrap/js/dist/scrollspy.js',
		'node_modules/bootstrap/js/dist/tab.js',
		'node_modules/bootstrap/js/dist/affix.js'])
		.pipe(concat({ path: 'main.js'}))
		.pipe(gulp.dest('static/js'))
);

gulp.task('scripts:uglify', () =>
	gulp.src('static/js/main.js')
		.pipe(uglify())
	    .on('error', notify.onError(function (error) {
	        return 'Uglifying failed: ' + error.message;
		}))
		.pipe(rename('main.min.js'))
		.pipe(gulp.dest('static/js'))
);

gulp.task('styles:main', () =>
	gulp.src('./scss/main.scss')
		.pipe(sass().on('error', sass.logError))
		.pipe(gulp.dest('./static/css'))
		.pipe(notify('SASS compiled successfully!'))
);

gulp.task('styles:minify', () =>
	gulp.src('static/css/main.css')
		.pipe(cleanCSS())
		.on('error', notify.onError(function (error) {
			return 'CSS Minification failed: ' + error.message;
		}))
		.pipe(rename({
			suffix: '.min'
		}))
		.pipe(gulp.dest('static/css'))
);