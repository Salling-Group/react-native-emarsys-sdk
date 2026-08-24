"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.withEmarsysProjectBuildGradle = void 0;
const config_plugins_1 = require("expo/config-plugins");
const GOOGLE_SERVICES_CLASSPATH = "classpath('com.google.gms:google-services:4.4.4')";
const SKIP_METADATA_HOOK = `
subprojects {
  plugins.withId("org.jetbrains.kotlin.android") {
    extensions.configure(org.jetbrains.kotlin.gradle.dsl.KotlinAndroidProjectExtension) {
      it.compilerOptions.freeCompilerArgs.add("-Xskip-metadata-version-check")
    }
  }
}`;
const withEmarsysProjectBuildGradle = config => (0, config_plugins_1.withProjectBuildGradle)(config, config => {
    let contents = config.modResults.contents;
    if (!contents.includes(GOOGLE_SERVICES_CLASSPATH)) {
        contents = contents.replace(/(buildscript\s*{[\s\S]*?dependencies\s*{)/m, `$1\n    ${GOOGLE_SERVICES_CLASSPATH}`);
    }
    // TODO: review and remove when expo supports higher kotlin version
    if (!contents.includes('-Xskip-metadata-version-check')) {
        contents += SKIP_METADATA_HOOK;
    }
    config.modResults.contents = contents;
    return config;
});
exports.withEmarsysProjectBuildGradle = withEmarsysProjectBuildGradle;
