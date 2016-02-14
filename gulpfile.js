const gulp = require('gulp');
const ts = require('gulp-typescript');
const typescript = require('typescript');
const babel = require('gulp-babel');
const tsProject = ts.createProject('tsconfig.json', {
  typescript: typescript,
  sortOutput: true,
});

gulp.task('build', () => {
  return (tsProject.config.files ? tsProject.src() : gulp.src('src/**/*.ts'))
    .pipe(ts(tsProject))
    .pipe(babel())
    .pipe(gulp.dest('lib'));
});

gulp.task('watch', ['build'], () => {
  gulp.watch('src/**/*.ts', ['build']);
});
