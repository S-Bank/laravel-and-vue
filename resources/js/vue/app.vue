<template>
    <div>
        <header>
            <h4>This is header area</h4>
        </header>
        
        <aside>
            <div>
                <ul>
                    <li>
                        <router-link to="/hooks">hooks</router-link>
                    </li>
                </ul>
            </div>
        </aside>
        <p>content are</p>
        <br />
        <br />
        <br />
        <br />
        <p style="color:red">
        <router-view></router-view>
        </p>
        <br />
        <br />
        <br />
        <br />
        <footer>
            <h5> This is footer area</h5>
        </footer>
    </div>
</template>