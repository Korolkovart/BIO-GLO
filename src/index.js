'use strict'

import '@babel/polyfill';
import 'nodelist-foreach-polyfill';
import elementClosest from 'element-closest'
elementClosest(window)
import 'fetch-polyfill';
import "es6-promise/auto";



import test1 from './modules/test1'
import test2 from './modules/test2'

test1()
test2()


