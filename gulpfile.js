const gulp = require('gulp');
const autoprefixer = require('gulp-autoprefixer');
const sass = require('gulp-sass')(require('sass'));
const sourcemaps = require('gulp-sourcemaps');

const browserify = require('browserify');
const source = require('vinyl-source-stream');
const tsify = require('tsify');
const buffer = require('vinyl-buffer');
const babelify = require('babelify');
const uglify = require('gulp-uglify-es').default;

const livereload = require('gulp-livereload');
sass.compiler = require('node-sass');

// npm install --save-dev babelify@8 babel-core babel-preset-es2015 vinyl-buffer gulp-sourcemaps
// function typescript() {
// 	return browserify({
// 		basedir: '.',
// 		debug: true,
// 		entries: ['./src/ts/Common/main.ts'],
// 	})
// 		.plugin(tsify)
// 		.transform(babelify.configure({
// 			presets: ["es2015"],
// 			extensions: [".ts"]
// 		}))
// 		.bundle()
// 		.pipe(source('bundle.js'))
// 		.pipe(buffer())
// 		.pipe(sourcemaps.init({ loadMaps: true }))
// 		.pipe(uglify())
// 		.pipe(sourcemaps.write('./maps'))
// 		.pipe(gulp.dest('./dist'))
// 		.pipe(livereload());
// }

function scss() {
	return gulp
		.src('./src/scss/style.scss')
		.pipe(sourcemaps.init())
		.pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
		.pipe(autoprefixer())
		.pipe(sourcemaps.write('./maps'))
		.pipe(gulp.dest('./src/scss'))
		.pipe(livereload());
}

exports.build = gulp.parallel(/*typescript,*/ scss);

exports.default = function () {
	livereload.listen();
	gulp.watch('./src/scss/**/*.scss', scss);
	gulp.watch('./src/components/**/*.scss', scss);
	// gulp.watch('./src/ts/**/*.ts', typescript);
	// gulp.watch('./**/*.php', function (cb) {
	// 	livereload.reload();
	// 	cb();
	// });
};
