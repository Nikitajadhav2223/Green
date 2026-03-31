



const productList = require('../Models/Products');

exports.getAllProducts = (req, res) => {
    // Query the database to fetch all products
    productList.find()
        .then((products) => {
            if (products && products.length > 0) {
                res.status(200).json(products);  // Send the product data in the response
            } else {
                res.status(404).json({ message: 'No products found' });
            }
        })
        .catch((error) => {
            console.error('Error fetching products:', error);
            res.status(500).json({ message: 'Error fetching products', error: error.message });
        });
};

exports.getProductByTitle = async (req, res) => {
    const productTitle = req.params.Title;

    try {
        // Search for a product by title (case-insensitive)
        const product = await productList.findOne({ Title: { $regex: `^${productTitle}$`, $options: 'i' } });

        if (product) {
            res.status(200).json({ product });
        } else {
            res.status(404).json({ message: "Product not found" });
        }
    } catch (error) {
        console.error('Error fetching product by Title:', error);
        res.status(500).json({ message: 'Error fetching product by Title', error: error.message });
    }
};

exports.getProductsByType = (req, res) => {
    const type = req.params.type;

    // Query the database for products that match the type
    productList.find({ type: { $regex: type, $options: 'i' } })  // Case-insensitive type search
        .then((filteredProducts) => {
            if (filteredProducts.length > 0) {
                res.status(200).json({ productList: filteredProducts });
            } else {
                res.status(404).json({ message: "No products found for the provided type" });
            }
        })
        .catch((error) => {
            console.error('Error fetching products by type:', error);
            res.status(500).json({ message: 'Error fetching products', error: error.message });
        });
};




exports.signup = async (req, res) => {
    try {
      const { name, email, password } = req.body;
      
      const existingUser = await User.findOne({ email });
      if (existingUser) return res.status(400).json({ message: "User already exists" });
  
      const hashedPassword = await bcrypt.hash(password, 10);
      const newUser = new User({ name, email, password: hashedPassword });
  
      await newUser.save();
      res.status(201).json({ message: "User created successfully" });
    } catch (error) {
      res.status(500).json({ message: "Server error" });
    }
  };
  
  exports.login = async (req, res) => {
    try {
      const { email, password } = req.body;
  
      const user = await User.findOne({ email });
      if (!user) return res.status(400).json({ message: "Invalid email or password" });
  
      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) return res.status(400).json({ message: "Invalid email or password" });
  
      const token = jwt.sign({ id: user._id }, "secretKey", { expiresIn: "1h" });
  
      res.json({ token, user: { id: user._id, name: user.name, email: user.email } });
    } catch (error) {
      res.status(500).json({ message: "Server error" });
    }
  };
  