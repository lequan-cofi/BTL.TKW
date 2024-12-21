// Thêm sự kiện cho các nhóm tùy chọn
document.querySelectorAll('.option-group').forEach(group => {
    group.addEventListener('click', function(event) {
        // Tìm tùy chọn được nhấp
        const clickedOption = event.target.closest('.option');
        if (!clickedOption) return; // Thoát nếu không nhấp vào .option

        // Xóa lớp "selected" khỏi tất cả tùy chọn trong nhóm
        group.querySelectorAll('.option').forEach(option => {
            option.classList.remove('selected');
        });

        // Thêm lớp "selected" vào tùy chọn được nhấp
        clickedOption.classList.add('selected');
    });
});

// document.addEventListeneroption('DOMContentLoaded', () => {
//     // Lấy tất cả các phần tử option
//     const imgoption = document.querySelectorAll('.options a');
//     const mainImage = document.getElementById('main-image');

//     // Thêm sự kiện click vào từng option
//     imgoption.forEach(option => {
//         option.addEventListener('click', (event) => {
//             event.preventDefault(); // Ngăn chặn hành vi mặc định của thẻ <a>
//             const imgSrc = option.querySelector('img').src; // Lấy đường dẫn ảnh của img-item
//             mainImage.src = imgSrc; // Thay đổi src của ảnh chính
//         });
//     });
// });

// document.addEventListener('DOMContentLoaded', () => {
//     const imgItems = document.querySelectorAll('.img-item a');
//     const mainImage = document.getElementById('main-image');

//     imgItems.forEach(item => {
//         item.addEventListener('click', (event) => {
//             event.preventDefault(); // Ngăn chặn hành vi mặc định của thẻ <a>
//             const imgSrc = item.querySelector('img').src; // Lấy đường dẫn ảnh của img-item

//             // Thêm hiệu ứng trượt trái
//             mainImage.style.transform = 'translateX(-100%)';
//             mainImage.style.opacity = '0';

//             // Thay đổi ảnh chính sau khi hiệu ứng kết thúc
//             setTimeout(() => {
//                 mainImage.src = imgSrc;
//                 mainImage.style.transform = 'translateX(0)';
//                 mainImage.style.opacity = '1';
//             }, 500); // Delay khớp với thời gian của transition (0.5s)
//         });
//     });
// });

// document.addEventListener('DOMContentLoaded', () => {
//     const imgItems = document.querySelectorAll('.img-item a'); // Tất cả ảnh nhỏ
//     const mainImage = document.getElementById('main-image'); // Ảnh chính

//     imgItems.forEach(item => {
//         item.addEventListener('click', (event) => {
//             event.preventDefault(); // Ngăn chặn hành động mặc định của thẻ <a>
//             const imgSrc = item.querySelector('img').src; // Lấy đường dẫn của ảnh được chọn

//             // Trượt ảnh hiện tại sang phải và làm mờ
//             mainImage.style.transform = 'translateX(100%)';
//             mainImage.style.opacity = '0';

//             // Thêm ảnh mới sau khi ảnh hiện tại trượt đi
//             setTimeout(() => {
//                 mainImage.src = imgSrc; // Đổi sang ảnh mới
//                 mainImage.style.transform = 'translateX(-100%)'; // Đưa ảnh mới từ trái vào
//                 setTimeout(() => {
//                     mainImage.style.transform = 'translateX(0)'; // Đưa ảnh về vị trí trung tâm
//                     mainImage.style.opacity = '1'; // Hiển thị ảnh mới
//                 }, 50); // Delay nhỏ để ảnh mới bắt đầu trượt
//             }, 500); // Thời gian chờ khớp với hiệu ứng (0.5 giây)
//         });
//     });
// });

document.addEventListener('DOMContentLoaded', () => {
    // Lấy phần tử hình ảnh chính
    const mainImage = document.getElementById('main-image');

    // Thay đổi hình ảnh chính khi nhấp vào hình ảnh trong img-item
    const imgItems = document.querySelectorAll('.img-item a');
    imgItems.forEach(item => {
        item.addEventListener('click', (event) => {
            event.preventDefault(); // Ngăn chặn hành vi mặc định
            const imgSrc = item.querySelector('img').src; // Lấy src của ảnh nhỏ
            mainImage.src = imgSrc; // Thay đổi src của ảnh chính
        });
    });

    // Thay đổi trạng thái dung lượng khi chọn
    const storageOptions = document.querySelectorAll('#dung-luong .option');
    storageOptions.forEach(option => {
        option.addEventListener('click', () => {
            // Xóa class 'selected' khỏi tất cả tùy chọn
            storageOptions.forEach(opt => opt.classList.remove('selected'));
            // Thêm class 'selected' vào tùy chọn được chọn
            option.classList.add('selected');
        });
    });

    // Thay đổi trạng thái màu sắc khi chọn
    const colorOptions = document.querySelectorAll('#mau-sac .option');
    colorOptions.forEach(option => {
        option.addEventListener('click', () => {
            // Xóa class 'selected' khỏi tất cả tùy chọn
            colorOptions.forEach(opt => opt.classList.remove('selected'));
            // Thêm class 'selected' vào tùy chọn được chọn
            option.classList.add('selected');

            // Thay đổi hình ảnh chính theo màu sắc
            const imgSrc = option.querySelector('img').src; // Lấy src của ảnh trong tùy chọn màu sắc
            mainImage.src = imgSrc; // Cập nhật hình ảnh chính
        });
    });
});

document.addEventListener('DOMContentLoaded', () => {
    // Lấy tất cả các tùy chọn dung lượng
    const storageOptions = document.querySelectorAll('#dung-luong .option');
    const promoPrice = document.querySelector('.last-price span');
    const originalPrice = document.querySelector('.new-price span');

    // Xử lý sự kiện click vào từng dung lượng
    storageOptions.forEach(option => {
        option.addEventListener('click', () => {
            // Cập nhật class 'selected'
            storageOptions.forEach(opt => opt.classList.remove('selected'));
            option.classList.add('selected');

            // Lấy giá mới từ thuộc tính data-price
            const newPrice = option.getAttribute('data-price');
            const oldPrice = (parseFloat(newPrice.replace(/\./g, '')) * 1.3).toFixed(0); // Giá gốc tăng 30%
// Hàm định dạng giá
const formatPrice = (price) => {
    return price.replace(/\B(?=(\d{3})+(?!\d))/g, '.');
};
            // Cập nhật giá trong giao diện mà không làm mất các class CSS
            promoPrice.textContent = `${formatPrice(oldPrice)} ₫`;
            originalPrice.textContent = `${newPrice.replace(/\B(?=(\d{3})+(?!\d))/g, '.')} ₫`;
        });
    });
});