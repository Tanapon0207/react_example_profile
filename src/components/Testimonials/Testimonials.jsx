import styles from "./Testimonials.module.css";

function Testimonials() {
  return (
    <div className={styles.testi_con}>
      <h3 className={styles.testi_title}>Testimonials</h3>
      <div className={styles.testi_list}>
        <div className={styles.testi_item}>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet in
            optio architecto expedita amet possimus laudantium. Magni eaque
            soluta voluptas.
          </p>
          <img
            src="https://images.unsplash.com/photo-1557862921-37829c790f19?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG1hbnxlbnwwfHwwfHx8MA%3D%3D"
            alt=""
          />
          <h4>John Doe</h4>
          <p className={styles.bio}>Web Developer</p>
        </div>

        <div className={styles.testi_item}>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet in
            optio architecto expedita amet possimus laudantium. Magni eaque
            soluta voluptas.
          </p>
          <img
            src="https://images.unsplash.com/photo-1611695434398-4f4b330623e6?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDExfHx8ZW58MHx8fHx8"
            alt=""
          />
          <h4>Test Doe</h4>
          <p className={styles.bio}>Web Developer</p>
        </div>

        <div className={styles.testi_item}>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet in
            optio architecto expedita amet possimus laudantium. Magni eaque
            soluta voluptas.
          </p>
          <img
            src="https://images.unsplash.com/photo-1618333453296-9e35280fd6b1?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8d29tZW4lMjBidXNpbmVzc3xlbnwwfHwwfHx8MA%3D%3D"
            alt=""
          />
          <h4>Hello Doe</h4>
          <p className={styles.bio}>Web Developer</p>
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
