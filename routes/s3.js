const express = require("express");
const router = express.Router();

const AWS = require("aws-sdk");
const fs = require("fs");
const fileType = require("file-type");
const bluebird = require("bluebird");
const multiparty = require("multiparty");

AWS.config.update({
  accessKeyId: process.env.S3_ACCESS_KEY,
  secretAccessKey: process.env.S3_SECRET,
});

// configure AWS to work with promises
AWS.config.setPromisesDependency(bluebird);

// create S3 instance
const s3 = new AWS.S3();

const uploadFile = (buffer, name, type) => {
  const params = {
    Body: buffer,
    Bucket: "studiz",
    ContentType: type,
    Key: `lessonsImages/${name}`,
  };
  return s3.upload(params).promise();
};

/**
 * @route POST /api/s3/uploadFile
 * @param {String} email email of the user
 * @return {Boolean}
 */
router.post("/upload", (req, res) => {
  const form = new multiparty.Form();
  form.parse(req, async (error, fields, files) => {
    if (error) res.status(200).send({ success: false, file: null });
    try {
      const { path: filePath, originalFilename } = files.file[0];

      const buffer = fs.readFileSync(filePath);
      const fileExtension = originalFilename.split(".").pop();
      const type = `image/${fileExtension}`;
      const timestamp = Date.now().toString();
      const fileName = `${
        timestamp +
        originalFilename +
        Math.floor(100000 + Math.random() * 900000)
      }`;
      const { Location: fileLink } = await uploadFile(buffer, fileName, type);
      return res.status(200).send({ success: true, file: fileLink });
    } catch (error) {
      console.log(error);
      return res.status(200).send({ success: false, file: null });
    }
  });
});

module.exports = router;
