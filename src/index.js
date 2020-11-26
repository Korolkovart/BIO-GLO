'use strict'

import '@babel/polyfill';
import 'nodelist-foreach-polyfill';
import elementClosest from 'element-closest'
elementClosest(window)
import 'fetch-polyfill';
import "es6-promise/auto";



import popup from './modules/popup'
import test2 from './modules/test2'

//popup
popup()
test2()


