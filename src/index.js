'use strict'

import '@babel/polyfill';
import 'nodelist-foreach-polyfill';
import elementClosest from 'element-closest'
elementClosest(window)
import 'fetch-polyfill';
import "es6-promise/auto";

import popup from './modules/popup'
import more from './modules/more'
import culcAccordions from './modules/culcAccordions'
import culc from './modules/culc'
import sendForm from './modules/sendForm'


//popup
popup()
//culcAccordion
culcAccordions()
//more
more()
//culc
culc()
//sendform
sendForm()



