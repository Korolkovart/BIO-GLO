'use strict'

import '@babel/polyfill';
import 'nodelist-foreach-polyfill';
import elementClosest from 'element-closest'
elementClosest(window)
import 'fetch-polyfill';
import "es6-promise/auto";



import popup from './modules/popup'
import accordion from './modules/accordion'

//popup
popup()
//accordion-two
accordion()


