function (user, context, cb) {
  if (context.request.geoip) {
    user.country = context.request.geoip.country_name;
  }
  cb(null, user, context);
}
