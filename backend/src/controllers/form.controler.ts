import checkList from "../database/forms/checklist.schema";
import picture from "../database/forms/pictures.schema";
import group from "../database/forms/group.schema";
import groupProperty from "../database/forms/group_property.schema";

export var createGroup = async (req, res) => {
  const { groupName } = req.body;
  try {
    const newGroup = await group.create({ groupName });
    return res.status(200).json(newGroup);
  } catch (error) {
    return res.status(500).json({ message: "Something went wrong - " + error });
  }
};

export var createGroupProperty = async (req, res) => {
  const { groupId, propertyName } = req.body;
  try {
    const newGroupProperty = await groupProperty.create({
      groupId,
      propertyName,
    });
    return res.status(200).json(newGroupProperty);
  } catch (error) {
    return res.status(500).json({ message: "Something went wrong - " + error });
  }
};

export var createCheckList = async (req, res) => {
  const { groupId, checkListName } = req.body;
  try {
    const newCheckList = await checkList.create({ groupId, checkListName });
    return res.status(200).json(newCheckList);
  } catch (error) {
    return res.status(500).json({ message: "Something went wrong - " + error });
  }
};

export var createPicture = async (req, res) => {
  const { groupId, path } = req.body;
  try {
    const newpic = await picture.create({ groupId, path });
    return res.status(200).json(newpic);
  } catch (error) {
    return res.status(500).json({ message: "Something went wrong - " + error });
  }
};

export var getGroup = async (req, res) => {
  const { groupName } = req.body;
  try {
    const groupExist = await group.findOne({ groupName });
    if (groupExist) {
      return res.status(200).json(groupExist);
    } else {
      return res.status(404).json({ message: "Group not found." });
    }
  } catch (error) {
    return res.status(500).json({ message: "Something went wrong - " + error });
  }
};

export var getGroupProperty = async (req, res) => {
  const { propertyName } = req.body;
  try {
    const groupPExist = await groupProperty.findOne({ propertyName });
    if (groupPExist) {
      return res.status(200).json(groupPExist);
    } else {
      return res.status(404).json({ message: "Group Property not found." });
    }
  } catch (error) {
    return res.status(500).json({ message: "Something went wrong - " + error });
  }
};

export var getPicture = async (req, res) => {
  const { path } = req.body;
  try {
    const picExist = await picture.findOne({ path });
    if (picExist) {
      return res.status(200).json(picExist);
    } else {
      return res.status(404).json({ message: "Picture not found" });
    }
  } catch (error) {
    return res.status(500).json({ message: "Something went wrong - " + error });
  }
};

export var getCheckList = async (req, res) => {
  const { checkListName } = req.body;
  try {
    const clExist = await checkList.findOne({ checkListName });
    if (clExist) {
      return res.status(200).json(clExist);
    } else {
      return res.status(404).json({ message: "CheckList not found" });
    }
  } catch (error) {
    return res.status(500).json({ message: "Something went wrong - " + error });
  }
};

export var getGroupbyID = async (req, res) => {
  const _id = req.params.id;
  try {
    const groupExist = await group.findOne({ _id });
    if (groupExist) {
      return res.status(200).json(groupExist);
    } else {
      return res.status(404).json({ message: "Group not found." });
    }
  } catch (error) {
    return res.status(500).json({ message: "Something went wrong - " + error });
  }
};

export var getGroupPropertybyID = async (req, res) => {
  const _id = req.params.id;
  try {
    const groupPExist = await groupProperty.findOne({ _id });
    if (groupPExist) {
      return res.status(200).json(groupPExist);
    } else {
      return res.status(404).json({ message: "Group Property not found." });
    }
  } catch (error) {
    return res.status(500).json({ message: "Something went wrong - " + error });
  }
};

export var getPicturebyID = async (req, res) => {
  const _id = req.params.id;
  try {
    const picExist = await picture.findOne({ _id });
    if (picExist) {
      return res.status(200).json(picExist);
    } else {
      return res.status(404).json({ message: "Picture not found" });
    }
  } catch (error) {
    return res.status(500).json({ message: "Something went wrong - " + error });
  }
};

export var getCheckListbyID = async (req, res) => {
  const _id = req.params.id;
  try {
    const clExist = await checkList.findOne({ _id });
    if (clExist) {
      return res.status(200).json(clExist);
    } else {
      return res.status(404).json({ message: "CheckList not found" });
    }
  } catch (error) {
    return res.status(500).json({ message: "Something went wrong - " + error });
  }
};

export var getAllGroups = async (req, res) => {
  group.find({}, (err, groups) => {
    if (err) {
      return res.status(500).json({ message: "Something went wrong - " + err });
    } else {
      return res.status(200).json(groups);
    }
  });
};

export var getAllGroupProperty = async (req, res) => {
  groupProperty.find({}, (err, gp) => {
    if (err) {
      return res.status(500).json({ message: "Something went wrong - " + err });
    } else {
      return res.status(200).json(gp);
    }
  });
};

export var getAllCheckLists = async (req, res) => {
  checkList.find({}, (err, cl) => {
    if (err) {
      return res.status(500).json({ message: "Something went wrong - " + err });
    } else {
      return res.status(200).json(cl);
    }
  });
};

export var getAllPictures = async (req, res) => {
  picture.find({}, (err, pics) => {
    if (err) {
      return res.status(500).json({ message: "Something went wrong - " + err });
    } else {
      return res.status(200).json(pics);
    }
  });
};

export var createForm = async (req, res) => {
  const { groupName, fieldsRequired } = req.body;
  try {
    const newGroup = await group.create({ groupName });
    for (let i = 0; i < fieldsRequired.length; i++) {
      const newGroupProperty = await groupProperty.create({
        groupId: newGroup._id,
        propertyName: fieldsRequired[i].propertyName,
      });
      for (let j = 0; j < fieldsRequired[i].length - 1; j++) {
        const newCheckList = await checkList.create({
          groupPropertyId: newGroup._id,
          checkListName: fieldsRequired[j].checkListName,
        });
        const pic = await picture.create({
          groupPropertyId: newGroup._id,
          path: fieldsRequired[j].path,
        });
      }
    }
    return res.status(200).json("New Form Created successfully!\n", newGroup);
  } catch (error) {
    return res.status(500).json({ message: "Something went wrong - " + error });
  }
};
