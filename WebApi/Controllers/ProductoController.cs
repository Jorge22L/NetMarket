﻿using AutoMapper;
using Core.Entities;
using Core.Interfaces;
using Core.Specifications;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using WebApi.Dtos;
using WebApi.Errors;

namespace WebApi.Controllers
{
    public class ProductoController : BaseApiController
    {
        private readonly IGenericRepository<Producto> _productoRepository;
        private readonly IMapper _mapper;

        public ProductoController(IGenericRepository<Producto> productoRepository, IMapper mapper)
        {
            _productoRepository = productoRepository;
            _mapper = mapper;
        }

        [HttpGet]
        public async Task<ActionResult<List<Pagination<ProductoDto>>>> GetProductos([FromQuery]ProductoSpecificationParams productoParams)
        {
            var spec = new ProductoWithCategoriaAndMarcaSpecification(productoParams);

            var productos = await _productoRepository.GetAllWithSpecAsync(spec);

            var specCount = new ProductoForCountingSpecification(productoParams);
            var totalProductos = await _productoRepository.CountAsync(specCount);

            var rounded = Math.Ceiling(Convert.ToDecimal(totalProductos / productoParams.PageSize));
            var totalPage = Convert.ToInt32(rounded);

            var data = _mapper.Map<IReadOnlyList<Producto>, IReadOnlyList<ProductoDto>>(productos);

            return Ok(
                new Pagination<ProductoDto>
                {
                    Count = totalProductos,
                    Data = data,
                    PageCount = totalPage,
                    PageIndex = productoParams.PageIndex,
                    PageSize = productoParams.PageSize,
                }
            );
            //return Ok(_mapper.Map<IReadOnlyList<Producto>, IReadOnlyList<ProductoDto>>(productos));
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<ProductoDto>> GetProducto(int id)
        {
            //spec debe incluir la logica de la condicion de la consulta
            // tambien la relacion entre las entidades
            var spec = new ProductoWithCategoriaAndMarcaSpecification(id);
            var producto = await _productoRepository.GetByIdWithSpec(spec);
            if(producto == null)
            {
                return NotFound(new CodeErrorResponse(404, "El producto no existe"));
            }
            return _mapper.Map<Producto, ProductoDto>(producto);
            
        }

        [HttpPost]
        public async Task<ActionResult<Producto>> Post(Producto producto)
        {
            var resultado = await _productoRepository.Add(producto);
            if(resultado == 0)
            {
                throw new Exception("No se insertó el producto.");
            }

            return Ok(producto);
        }

        [HttpPut("{id}")]
        public async Task<ActionResult<Producto>> Put(int id, Producto producto)
        {
            producto.Id = id;
            var resultado = await _productoRepository.Update(producto);
            if (resultado == 0)
            {
                throw new Exception("Error al actualizar el producto");
            }
            return Ok(producto);
        }

    }
}
