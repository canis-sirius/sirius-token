const SiriusToken = artifacts.require("SiriusToken");

module.exports = function (deployer) {
  deployer.deploy(SiriusToken, 1000000);
};
