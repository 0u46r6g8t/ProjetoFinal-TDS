nest g module $1/$2

mkdir -p $2/Controller $2/Services $2/DTOs $2/DTOs/interface $2/Typeorm $2/Typeorm/entities $2/Typeorm/repositories $2/Repositories

touch $2/Typeorm/index.ts $2/Controller/$2.controller.ts $2/DTOs/Created$2.DTO.ts $2/DTOs/Updated$2.DTO.ts $2/Typeorm/repositories/$2.repository.ts $2/Typeorm/entities/$2.entity.ts $2/Services/$2.service.ts $2/Services/index.ts $2/Repositories/$2.repository.ts $2/DTOs/interface/$2.interface.ts