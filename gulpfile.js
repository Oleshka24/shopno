const 	gulp 			= require('gulp'),
		rename 			= require('gulp-rename'),
		sass 			= require('gulp-sass'),
		autoprefixer 	= require('gulp-autoprefixer'),
		sourcemaps 		= require('gulp-sourcemaps'),
		browserSync 	= require('browser-sync').create();

function style_css(done) {
	gulp.src('www/shopno/scss/main.scss')
	 .pipe(sourcemaps.init())
	 .pipe(rename({
	 	suffix: '.min',
	 }))
	 .pipe(sass({
	 	errorLogToConsole: true,
	 	outputStyle: 'compressed',
	 }))
	 .on('error', console.error.bind(console))
	 .pipe(autoprefixer({
	 	browsers: ['last 2 versions'],
	 	cascade: false,
	 }))
	 .pipe(sourcemaps.write('./'))
	 .pipe(gulp.dest('www/shopno/css/'))
	 .pipe(browserSync.stream());

	done();
}

function watchFiles() {
	gulp.watch('www/shopno/scss/*.scss', style_css);
	gulp.watch('www/shopno/index.html', browserReload);
	gulp.watch('www/shopno/js/main.js', browserReload);
}

function sync(done) {
	browserSync.init({
		server: {
			baseDir: 'www/shopno/',
		},
		port: 3000,
	});

	done();
}

function browserReload(done) {
	browserSync.reload();
	done();
}

gulp.task('default', gulp.parallel(watchFiles, sync));