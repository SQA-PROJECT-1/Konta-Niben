# Installation 
##git clone <repository-url>
##cd <repository-directory>
cd backend
npm install
npm run dev
# frontend
cd..
cd client
npm install
npm run dev

# API Endpoints
GET /api/wishlist/?{UserId}  (for all wishListItem)
GET /api/wishlist/check/?{UserId} &{ProductID} (To check already exist wishListItem)
POST /api/wishlist/?{UserId}&{ProductID} (add in wishList)
DELETE  /api/wishlist/?{UserId}&{ProductID} (Remove item from wishList)
# Example
<img width="949" alt="image" src="https://github.com/SQA-PROJECT-1/Konta-Niben/assets/106031804/926ed4de-975a-4fe6-8b58-e1acde7c93de">
<img width="945" alt="image" src="https://github.com/SQA-PROJECT-1/Konta-Niben/assets/106031804/e5ef14d7-a946-44b0-877e-e8466deac3c8">

# License
This project is licensed under the MIT License.


