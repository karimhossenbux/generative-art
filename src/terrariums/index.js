import { drawBranch, drawLeaves } from './branch'
import branches from './branches'
import drawPot from './pot'

const container = document.querySelector('.container')
const canvas = document.createElement('canvas')
const ctx = canvas.getContext('2d')

canvas.width = 1200
canvas.height = 1200

container.appendChild(canvas)

ctx.translate(300, 400)

branches.map(branch => drawBranch(ctx, branch))
const bounds = drawPot(ctx, 220, 150, 200, 150)
branches.map(branch => drawLeaves(ctx, branch, bounds))
