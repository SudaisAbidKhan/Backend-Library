import libraryModel from "../model/libraryModel.js";

export const addNewBook = async (req, res) => {
  const { title, author, genre, publishedYear, available } = req.body;

  if (
    title === undefined ||
    author === undefined ||
    genre === undefined ||
    publishedYear === undefined ||
    available === undefined
  ) {
    return res
      .status(404)
      .json({ success: false, message: "Input is missing" });
  }

  try {
    const newBook = new libraryModel({
      title,
      author,
      genre,
      publishedYear,
      available,
    });
    await newBook.save();

    return res
      .status(200)
      .json({ success: true, message: "Book added successfully" });
  } catch (error) {
    return res.json({ success: false, message: error.message });
  }
};

export const getAllBooks = async (req, res) => {
  try {
    const allBooks = await libraryModel.find({}, { __v: 0 });

    if (!allBooks) {
      return res
        .status(404)
        .json({ success: false, message: "There are books in the library" });
    }

    return res.status(200).json({ success: true, allBooks });
  } catch (error) {
    return res.json({ success: false, message: error.message });
  }
};

export const getSingleBook = async (req, res) => {
  const { _id } = req.params;

  try {
    const singleBook = await libraryModel.findById({ _id }, { __v: 0 });

    if (!singleBook) {
      return res
        .status(404)
        .json({ success: false, message: "Book not found" });
    }

    return res.status(200).json({ success: true, singleBook });
  } catch (error) {
    return res.json({ success: false, message: error.message });
  }
};

export const getSingleBookAvail = async (req, res) => {
  const { available } = req.query;

  try {
    const availableBook = await libraryModel.find({ available }, { __v: 0 });

    if (!availableBook) {
      return res
        .status(404)
        .json({ success: false, message: "Book not found" });
    }

    return res.status(200).json({ success: true, availableBook });
  } catch (error) {
    return res.json({ success: false, message: error.message });
  }
};

export const updateBook = async (req, res) => {
  const { _id } = req.params;

  try {
    const checkBook = await libraryModel.findById({ _id }, { __v: 0 });

    if (!checkBook) {
      return res
        .status(404)
        .json({ success: false, message: "Book not found" });
    }

    await libraryModel.findByIdAndUpdate({ _id }, req.body, {
      new: true,
    });

    return res.json({
      success: true,
      message: `Book is updated successfully`,
    });
  } catch (error) {
    return res.json({ success: false, message: error.message });
  }
};

export const deleteBook = async (req, res) => {
  const { _id } = req.params;

  try {
    const checkBook = await libraryModel.findById({ _id }, { __v: 0 });

    if (!checkBook) {
      return res
        .status(404)
        .json({ success: false, message: "Book not found" });
    }

    await libraryModel.findByIdAndDelete({ _id });

    return res.json({
      success: true,
      message: `Book is Deleted successfully`,
    });
  } catch (error) {
    return res.json({ success: false, message: error.message });
  }
};
