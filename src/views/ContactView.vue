<template>
    <div>
        <div class="row">
          <div class="col-4">
            <div id="list-example" class="list-group">
              <a class="list-group-item list-group-item-action" href="#list-item-1">Item 1</a>
              <a class="list-group-item list-group-item-action" href="#list-item-2">Item 2</a>
              <a class="list-group-item list-group-item-action" href="#list-item-3">Item 3</a>
              <a class="list-group-item list-group-item-action" href="#list-item-4">Item 4</a>
            </div>
          </div>
          <div class="col-8">
            <div data-bs-spy="scroll" data-bs-target="#list-example" data-bs-smooth-scroll="true" class="scrollspy-example" tabindex="0">
              <h4 id="list-item-1">Item 1</h4>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum tenetur iure hic repellendus rem, qui minima delectus a sunt beatae. Sequi exercitationem velit dolore molestias. Modi, commodi tenetur nemo sequi porro ea aperiam quam debitis nostrum quae quaerat quidem odit tempore! Incidunt fugit dicta sapiente pariatur maxime modi, reiciendis eaque!</p>
              <h4 id="list-item-2">Item 2</h4>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus voluptate illo quam, soluta amet repellat facilis. Optio rem cum saepe corporis quidem dicta nobis aut.</p>
              <h4 id="list-item-3">Item 3</h4>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt ipsam voluptate maiores. Cupiditate facilis in libero, officiis maxime necessitatibus quibusdam earum eligendi? Eius qui reprehenderit, molestiae praesentium quisquam dolor officia.</p>
              <h4 id="list-item-4">Item 4</h4>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, facere laboriosam. Reprehenderit minus explicabo harum rerum impedit mollitia voluptates dolorem et, amet perferendis delectus architecto. Eligendi accusamus dolor repellat atque.</p>
            </div>
          </div>
        </div>

    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="scss" scoped>
    .scrollspy-example {
        height: 150px !important;
        overflow: scroll;
    }
</style>