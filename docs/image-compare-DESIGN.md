# Image Compare Workbench — design

## One pool, two rails

Both rails show the same images. That is the product.

A “refs folder vs gens folder” split is artificial. You are picking two members of one set, not joining two datasets. Same files, two pickers. Click which one is the reference and which one is the candidate. Lock A, cycle B.

Do not “fix” this into separate lists. If someone asks for a split, the answer is still one pool.

## What this is not

Not Kaleidoscope. Not a pixel inspector. Not onion-skin, heatmap, or export. Those fights are later. Rails first.

## Camera

Wipe behaviors (hybrid / image-locked / screen-locked) and size-norm (basis × lock A/B/both) are real. They serve overlaying variants at different resolutions so cycling B against a fixed A still lines up.
