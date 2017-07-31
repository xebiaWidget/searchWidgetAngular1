$ = require 'jquery'

do fill = (item = 'Search policy by policy number or name') ->
  $('.tagline').append "#{item}"
fill