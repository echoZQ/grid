var gulp = require('gulp');
var less = require('gulp-less');
var uglify = require('gulp-uglify');
var watch = require('gulp-watch');

var file = {
	src: {
		less: ['static/less/**/*.less', '!static/less/lib/*.less'],
		css: './static/css/'
	}
}
//less编译
gulp.task('less', function () {
	var stream = gulp.src(file.src.less);
	stream.pipe(less())
		.pipe(gulp.dest(file.src.css));
});

gulp.task('default', ['less']);
gulp.task('dev', function () {
	gulp.watch(file.src.less, ['less']);
});

