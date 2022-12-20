// reserve code in file `draft.js` to specifical file in corresponding directions.

import inquirer from 'inquirer'
import path from 'path'
import { copyFile, constants } from 'node:fs'

const questions = [
  { type: 'input', name: 'name', message: "What's the problem's name? " },
  {
    type: 'list',
    name: 'difficulty',
    message: 'Difficulty: ',
    choices: ['easy', 'medium', 'hard'],
  },
  {
    type: 'input',
    name: 'dir',
    message: "What's the destination relative path? (with / at both side)",
    default: '/problems/leetcode/',
  },
]

inquirer
  .prompt(questions)
  .then((answers) => {
    console.log(answers)
    createCopyFile(answers)
  })
  .catch((error) => {
    console.log('error: ', error)
    console.log('please do it manually, bye.')
  })

const createCopyFile = (info) => {
  let resNameArr = []

  resNameArr.push(info.difficulty)

  let nameArr = info.name.split(' ')
  let numStr = parseInt(nameArr.shift()).toString()
  while (numStr.length < 4) {
    numStr = '0' + numStr
  }
  resNameArr.push(numStr)

  nameArr[0] = nameArr[0].toLowerCase()
  let nameStr = nameArr.join('')
  resNameArr.push(nameStr)
  let resNameStr = resNameArr.join('_')
  resNameStr += '.js'

  let sourceFileName = path.dirname(process.argv[1]) + '/draft.js'
  let destFileName = path.dirname(process.argv[1]) + info.dir + resNameStr

  copyFile(sourceFileName, destFileName, constants.COPYFILE_EXCL, (error) => {
    if (error) {
      console.log('error: ', error)
      console.log('please do it manually, bye.')
    } else {
      console.log('solution of the problem was reserved.')
    }
  })
}
