const Form = () => {
  
  return (
    <form className="recipe-form"> 
        <div className="form-row mb-3">
            <div className="col">
                <label for="labelInput" className="labelInput">Food Name</label>
                <input type="text" className="form-control" placeholder=""/>
            </div>
            <div className="col-7">
                <label for="labelInput" className="labelInput">Description</label>
                <input type="text" className="form-control" placeholder=""/>
            </div>
            <div className="col">
                <label for="labelInput" className="labelInput">Image</label>
                <input type="text" className="form-control" placeholder=""/>
            </div>
        </div>
        <div className="form-row mb-3">
            <div className="col-4">
                <label for="labelInput" className="labelInput">Servings</label>
                <input type="text" className="form-control" placeholder=""/>
            </div>
            <div className="col-4">
                <label for="labelInput" className="labelInput">Preparation Time</label>
                <input type="text" className="form-control" placeholder=""/>
            </div>
            <div className="col-4">
                <label for="labelInput" className="labelInput">Cook Time</label>
                <input type="text" className="form-control" placeholder=""/>
            </div>
        </div>
        <div className="form-row">
            <div className="form-group col-md-12 ingColor">
                <label for="inputEmail4">Ingredients:</label>
            </div>
        </div>
        <div className="form-row">
            <div className="form-group col-md-4">
                <input type="email" className="form-control" id="inputEmail4" placeholder="Amount" />
            </div>
            <div className="form-group col-md-4">
                <input type="password" className="form-control" id="inputPassword4" placeholder="Measurement" />
            </div>
            <div className="form-group col-md-4">
                <input type="password" className="form-control" id="inputPassword4" placeholder="Name" />
            </div>
        </div>
        <div className="form-row">
            <div className="form-group col-md-4">
                <input type="email" className="form-control" id="inputEmail4" placeholder="Amount" />
            </div>
            <div className="form-group col-md-4">
                <input type="password" className="form-control" id="inputPassword4" placeholder="Measurement" />
            </div>
            <div className="form-group col-md-4">
                <input type="password" className="form-control" id="inputPassword4" placeholder="Name" />
            </div>
        </div>
        <button type="submit" className="btn btn-primary float-right">Add Ingredient</button>
    </form>
  )
}

export default Form;