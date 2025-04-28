const BillingCycle = require('./billingCycle')

BillingCycle.methods(['put', 'post', 'put', 'delete'])
BillingCycle.updateOptions({new: true, runValidators: true})

module.exports = BillingCycle