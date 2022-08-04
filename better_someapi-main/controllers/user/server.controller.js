const getServer = async (req, res) => {
  const serverID = req.body.id;

  if (serverID == "") {
    res.status(500).json({
      statusCode: 500,
      data: null,
      message: "ID_MISSING",
    });
    return;
  }

  try {
    res.status(200).json({
      statusCode: 200,
      data: serverID,
      message: "SUCCESS",
    });
  } catch (error) {
    res.status(500).json({
      statusCode: 500,
      data: null,
      message: "INTERNAL_SERVER_ERROR",
    });
  }
};

const putServer = async (req, res) => {
  try {
    res.status(200).json();
  } catch (error) {
    res.status(500).json();
  }
};

const postServer = async (req, res) => {
  try {
    res.status(200).json();
  } catch (error) {
    res.status(500).json();
  }
};

const deleteServer = async (req, res) => {
  try {
    res.status(200).json();
  } catch (error) {
    res.status(500).json();
  }
};