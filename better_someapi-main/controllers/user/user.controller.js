const CryptoJS = require("crypto-js");
const bcrypt = require("bcrypt");
const { PrismaClient } = require("@prisma/client");
const { encrypt, decrypt } = require("../../utils/crypto.util");

const prisma = new PrismaClient();

const getUser = async (req, res) => {
  // TODO: add a bit of auth with jwt.
  try {
    const user = await prisma.user.findFirst({
      where: {
        id: Number(req.params.id),
      },
    });

    // If user does not exists respond back with 404.
    if (user == null) {
      res.status(404).json({
        status: 404,
        data: null,
        message: "NOT_FOUND",
      });
    } else {
      // Encrypt information
      const decryptedEmail = await decrypt(
        user.email,
        process.env.AES_SECRET_KEY,
      );
      const decryptedFirstName = await decrypt(
        user.firstName,
        process.env.AES_SECRET_KEY,
      );
      const decryptedLastName = await decrypt(
        user.lastName,
        process.env.AES_SECRET_KEY,
      );
      const decryptedAddress = await decrypt(
        user.address,
        process.env.AES_SECRET_KEY,
      );
      const decryptedPhone = await decrypt(
        user.phone,
        process.env.AES_SECRET_KEY,
      );

      // Decrypt information before responding it back to client.
      res.status(200).json({
        statusCode: 200,
        data: {
          id: user.id,
          name: user.name,
          email: decryptedEmail.toString(CryptoJS.enc.Utf8),
          firstName: decryptedFirstName.toString(CryptoJS.enc.Utf8),
          lastName: decryptedLastName.toString(CryptoJS.enc.Utf8),
          phone: decryptedPhone.toString(CryptoJS.enc.Utf8),
          address: decryptedAddress.toString(CryptoJS.enc.Utf8),
        },
        message: "SUCCESS",
      });
    }
    // Catch error
  } catch (error) {
    res.status(500).json({
      statusCode: 500,
      data: null,
      message: "INTERNAL_SERVER_ERROR",
    });
    console.log(error);
  }
};

const postUser = async (req, res) => {
  try {
    if (req.body.email == "") {
      res.status(500).json({
        statusCode: 500,
        data: null,
        message: "EMAIL_MISSING",
      });
      return;
    }

    if (req.body.password == "") {
      res.status(500).json({
        statusCode: 500,
        data: null,
        message: "PASSWORD_MISSING",
      });
      return;
    }

    // Hash password with bcrypt.
    const hashedPassword = await bcrypt.hash(req.body.password, 15);

    const user = await prisma.user.create({
      data: {
        name: req.body.name,
        email: await encrypt(req.body.email, process.env.AES_SECRET_KEY),
        password: hashedPassword,
        firstName: await encrypt(
          req.body.firstName,
          process.env.AES_SECRET_KEY,
        ),
        lastName: await encrypt(req.body.lastName, process.env.AES_SECRET_KEY),
        address: await encrypt(req.body.address, process.env.AES_SECRET_KEY),
        phone: await encrypt(req.body.phone, process.env.AES_SECRET_KEY),
      },
    });

    const decryptedEmail = await decrypt(
      user.email,
      process.env.AES_SECRET_KEY,
    );
    const decryptedFirstName = await decrypt(
      user.firstName,
      process.env.AES_SECRET_KEY,
    );
    const decryptedLastName = await decrypt(
      user.lastName,
      process.env.AES_SECRET_KEY,
    );
    const decryptedAddress = await decrypt(
      user.address,
      process.env.AES_SECRET_KEY,
    );
    const decryptedPhone = await decrypt(
      user.phone,
      process.env.AES_SECRET_KEY,
    );

    res.status(200).json({
      statusCode: 200,
      data: {
        id: user.id,
        name: user.name,
        email: decryptedEmail.toString(CryptoJS.enc.Utf8),
        firstName: decryptedFirstName.toString(CryptoJS.enc.Utf8),
        lastName: decryptedLastName.toString(CryptoJS.enc.Utf8),
        phone: decryptedPhone.toString(CryptoJS.enc.Utf8),
        address: decryptedAddress.toString(CryptoJS.enc.Utf8),
      },
      message: "SUCCESS",
    });
  } catch (error) {
    res.status(500).json({
      status: 500,
      data: null,
      message: "INTERNAL_SERVER_ERROR",
    });
    console.log(error);
  }
};

const delUser = async (req, res) =>{
  try {
    const delUser = await prisma.user.delete({
      where: {
   id: Number(req.params.id)
  }
  })
  
  res.send(delUser)
  }
  catch (error){
    res.status(500).json({
      status: 500,
      data: null,
      message: "INTERNAL_SERVER_ERROR",
    });
    console.log(error);
  }
};

const findUser = async (req, res) =>{
  try {
    const delUser = await prisma.user.findFirst({
      where: {
   id: Number(req.params.id)
  }
  })
  
  res.send(delUser)
  }
  catch (error){
    res.status(500).json({
      status: 500,
      data: null,
      message: "INTERNAL_SERVER_ERROR",
    });
    console.log(error);
  }
};


module.exports = { postUser, getUser, delUser, findUser };
