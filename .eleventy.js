const { DateTime } = require( 'luxon' );

module.exports = function( eleventyConfig ) {

  eleventyConfig.addFilter( 'timeShort', ( dateObj ) => {
    return DateTime
      .fromFormat( dateObj, 'yyyy-MM-dd HH:mm:ss' )
      .toFormat( 'HH:mm' );
  });

  eleventyConfig.addFilter( 'timeHour', ( dateObj ) => {
    return DateTime
      .fromFormat( dateObj, 'yyyy-MM-dd HH:mm:ss' )
      .toFormat( 'HH' );
  });

  const time_now = DateTime.now();
  eleventyConfig.addShortcode( 'date', () =>
    `${ time_now.toFormat( 'dd MMM yyyy' ) }`
  );
  eleventyConfig.addShortcode( 'time', () =>
    `${ time_now.toFormat( 'HH:mm' ) }`
  );
  eleventyConfig.addShortcode( 'time_hour', () =>
    `${ time_now.toFormat( 'HH' ) }`
  );

  // 11ty config options.
  return {
    markdownTemplateEngine: "njk",
    dir: {
      input: "source",
      data: "_data",
      includes: "_includes",
      output: "site"
    },

    pathPrefix: "/law-order"
  };
};
